import { useParams } from "react-router-dom";

export interface PostProps {
  postContent: Record<string, React.ReactNode>;
}

export const Post = ({ postContent }: PostProps) => {
  const { id } = useParams<Record<string, string>>();
  const content = postContent[id!] ?? (
    <>
      <h1 className="text-3xl font-bold mb-2">Post #{id}</h1>
      <p className="text-gray-700">
        Contenido del post con ID{" "}
        <span className="font-mono text-indigo-600">{id}</span>.
      </p>
    </>
  );

  return <div className="p-6">{content}</div>;
};
