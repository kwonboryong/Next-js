import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

type PageParams = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: PageParams) {
  const movie = await getMovie(params.id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetailPage({ params }: PageParams) {
  const { id } = params;
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}

export const runtime = "edge";
