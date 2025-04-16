import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SearchResults } from "@/components/search-results"
import { SearchFilters } from "@/components/search-filters"

export default function SearchPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const type = (searchParams.type as string) || "flights"
  const from = (searchParams.from as string) || ""
  const to = (searchParams.to as string) || ""
  const departure = (searchParams.departure as string) || ""
  const returnDate = (searchParams.return as string) || ""

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container py-8">
          <h1 className="text-2xl font-bold md:text-3xl">
            {type.charAt(0).toUpperCase() + type.slice(1)} from {from} to {to}
          </h1>
          <div className="mt-8 grid gap-8 md:grid-cols-[300px_1fr]">
            <aside>
              <SearchFilters type={type} />
            </aside>
            <div>
              <SearchResults type={type} from={from} to={to} departure={departure} returnDate={returnDate} />
            </div>
          </div>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  )
}
