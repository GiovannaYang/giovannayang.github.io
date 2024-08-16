import { onMount, createSignal } from "solid-js";
import type { Component } from "solid-js";
import type { GithubRepoInfo, ProjectItem } from "@types";

export const Project: Component<{ project: ProjectItem }> = (props) => {
  const [data, setData] = createSignal<GithubRepoInfo | null>(null);

  const getRepo = async () => {
    const api = "https://api.pengzhanbo.cn/github/repo/" + props.project.repo;
    const result = (await fetch(api).then((res) => res.json())) as GithubRepoInfo;

    return result;
  };

  onMount(async () => props.project.repo && setData(await getRepo()));

  return (
    <div class="flex flex-col p-4 my-4 border border-gray-300 rounded-lg duration-300 font-ui hover:border-[#377bb5]">
      <p class="flex items-center gap-2 max-w-full text-lg no-underline duration-300">
        {props.project.repo ? (
          <span i-octicon:repo-16 text-xs text-gray-600 />
        ) : (
          <span i-mdi:web-asset text-xs text-gray-600 />
        )}
        <span class="flex-1 w-px overflow-hidden font-bold whitespace-nowrap">
          <a
            href={
              props.project.link
                ? props.project.link
                : `https://github.com/${props.project.repo}`
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            {props.project.name
              ? props.project.name
              : data()?.ownerType === "Organization"
                ? data()?.fullName
                : data()?.name}
          </a>
        </span>
        {data()?.visibility ? (
          <span class="inline-block px-2 text-xs text-gray-400 leading-5 border rounded-full">
            {`${data()?.visibility}${data()?.template ? " Template" : ""}`}
          </span>
        ) : (
          <span class="inline-block px-2 text-xs text-gray-400 leading-5 border rounded-full">
            Private
          </span>
        )}
      </p>
      <p class="flex-1 text-sm leading-6 text-gray-600">
        {props.project.desc ? props.project.desc : data()?.description}
      </p>
      <div class="flex gap-4 items-center justify-start text-sm leading-6 text-gray-600">
        {data()?.language && (
          <p flex gap-x-1 items-center>
            <span
              style={{ "background-color": data()?.languageColor }}
              class="inline-block w-2 h-2 rounded-full"
            />
            <span>{data()?.language}</span>
          </p>
        )}
        {data() && (
          <p flex gap-x-1 items-center>
            <span i-ph:star text-xs />
            <span>{data()?.stars}</span>
          </p>
        )}
        {data() && (
          <p flex gap-x-1 items-center>
            <span i-ph:git-fork text-xs />
            <span>{data()?.forks}</span>
          </p>
        )}
        {data()?.license && (
          <p flex gap-x-1 items-center>
            <span i-cil:balance-scale text-xs />
            <span>{data()?.license.name}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Project;
