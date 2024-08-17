import { onMount, createSignal } from "solid-js";
import type { Component } from "solid-js";
import type { ProjectItem } from "@types";

export const Project: Component<{ project: ProjectItem }> = (props) => {
  /* eslint-disable-next-line solid/reactivity */
  const api = "https://api.github.com/repos/" + props.project.repo;
  const [star, setStar] = createSignal<string>();

  const getRepoStars = async () => {
    const data = await fetch(api).then((res) => res.json());
    return data.stargazers_count;
  };

  onMount(async () => props.project.repo && setStar(await getRepoStars()));

  return (
    <div class="flex flex-col px-4 border border-gray-300 rounded-lg duration-300 font-ui hover:border-[#377bb5]">
      <p class="flex items-center gap-2 max-w-full duration-300">
        {props.project.link ? (
          <span i-mdi:web-asset text-xs text-gray-600 />
        ) : (
          <span i-octicon:repo-16 text-xs text-gray-600 />
        )}
        <span class="flex-1 w-px overflow-hidden whitespace-nowrap">
          <a
            href={
              props.project.link
                ? props.project.link
                : `https://github.com/${props.project.repo}`
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.project.name}
          </a>
        </span>
        {props.project.visibility && (
          <span class="inline-block px-2 text-xs text-gray-400 leading-5 border rounded-full">
            {props.project.visibility}
          </span>
        )}
      </p>
      <p class="flex-1 text-sm text-gray-600">{props.project.desc}</p>
      <div class="flex gap-4 items-center justify-start text-sm text-gray-600">
        {props.project.language && (
          <p flex gap-x-1 items-center>
            <span
              style={{
                "background-color": props.project.languageColor
                  ? props.project.languageColor
                  : "#377bb5"
              }}
              class="inline-block w-2 h-2 rounded-full"
            />
            <span>{props.project.language}</span>
          </p>
        )}
        {star() && (
          <p flex gap-x-1 items-center>
            <span i-ph:star text-xs />
            <span>{star()}</span>
          </p>
        )}
        {props.project.license && (
          <p flex gap-x-1 items-center>
            <span i-cil:balance-scale text-xs />
            <span>{props.project.license}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Project;
