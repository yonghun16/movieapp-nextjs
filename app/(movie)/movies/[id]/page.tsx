import { type Metadata } from "next";
import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

// generateMetadata 함수
export async function generateMetadata(
  { params }: { params: { id: string } }
): Promise<Metadata> {
  const movie = await getMovie(params.id);
  return {
    title: movie.title,
  };
}

// page 컴포넌트
export default async function MovieDetailPage({
  params,
}: {
  params: { id: string };
}) {
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
