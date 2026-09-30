import { NextRequest, NextResponse } from "next/server";
import { searchCitiesRealtime, fetchLocalitiesRealtime } from "@/lib/locationService";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const query = searchParams.get("q") || searchParams.get("query") || searchParams.get("search");
    const city = searchParams.get("city");
    const type = searchParams.get("type"); // "cities" | "localities"

    // Case 1: Fetch localities for a specified city
    if (city || type === "localities" || type === "locality") {
      const targetCity = city || searchParams.get("name") || "Kolkata";
      const result = await fetchLocalitiesRealtime(targetCity);
      return NextResponse.json({
        success: true,
        city: result.city,
        localities: result.localities,
        count: result.count,
        provider: result.provider,
      });
    }

    // Case 2: Search cities in real-time
    const limitParam = searchParams.get("limit");
    const limit = limitParam ? parseInt(limitParam, 10) : 25;
    const searchResult = await searchCitiesRealtime(query || "", limit);

    return NextResponse.json({
      success: true,
      query: query || "",
      cities: searchResult.cities,
      count: searchResult.cities.length,
      provider: searchResult.provider,
    });
  } catch (err: unknown) {
    console.error("Locations API Error:", err);
    return NextResponse.json(
      {
        success: false,
        error: err instanceof Error ? err.message : "Failed to query locations",
        cities: [],
        localities: [],
      },
      { status: 500 }
    );
  }
}
