import { onMount, createSignal, Show, Switch, Match, For } from "solid-js";
import type { Component } from "solid-js";
import type { GithubRepoInfo, ProjectItem } from "@types";
import { OhVueIcons, OhMyCV } from "./icons";

export const Project: Component<{ project: ProjectItem }> = (props) => {
  // eslint-disable-next-line solid/reactivity
  const api = "https://api.github.com/repos/" + props.project.repo;
  const [data, setData] = createSignal<GithubRepoInfo>();

  const getRepo = async () => {
    const result = await fetch(api).then((res) => res.json());

    const formattedData: GithubRepoInfo = {
      name: result.name,
      fullName: result.full_name,
      description: result.description,
      url: result.html_url,
      stars: result.stargazers_count,
      forks: result.forks_count,
      watchers: result.watchers_count,
      language: result.language,
      visibility: result.private ? "Private" : "Public",
      template: result.is_template,
      ownerType: result.owner.type,
      license: result.license
        ? { name: result.license.name, url: result.license.url }
        : null
    };

    return formattedData;
  };

  onMount(async () => props.project.repo && setData(await getRepo()));

  return (
    <a
      class="relative hstack gap-x-5 p-4 !no-underline !text-fg"
      border="~ border/60 hover:transparent"
      bg="hover:bg-dark"
      href={props.project.link}
      title={props.project.name}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div flex-auto h-full>
        <div class="hstack flex-wrap">
          <div whitespace-nowrap mr-3>
            {props.project.name}
          </div>
          <div hstack gap-x-2>
            <For each={props.project.tech}>
              {(icon) => <span class={`text-xs ${icon}`} />}
            </For>

            <Show when={data()}>
              <span hstack gap-x-1>
                <span i-noto-v1:star text-xs />
                <span class="text-sm mt-0.5">{data()?.stars}</span>
              </span>
            </Show>
          </div>
        </div>
        <div mt-1 text="sm fg-light" innerHTML={props.project.desc} />
      </div>

      <div pt-2 text="3xl fg-light">
        <Switch fallback={<div class={props.project.icon || "i-carbon-unknown"} />}>
          <Match when={props.project.icon === "oh-vue-icons"}>
            <OhVueIcons />
          </Match>
          <Match when={props.project.icon === "oh-my-cv"}>
            <OhMyCV />
          </Match>
        </Switch>
      </div>
    </a>
  );
};

export default Project;
