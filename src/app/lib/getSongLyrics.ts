import * as cheerio from "cheerio";

export const getSongLyrics = async ({ url }: { url: string }) => {
  try {
    const response = await fetch(url);

    const body = await response.text();

    const $ = cheerio.load(body);

    let lyrics = $('div[class="lyrics"]').text().trim();

    if (!lyrics) {
      lyrics = "";

      $('div[class^="Lyrics__Container"]').each((i, elem) => {
        if ($(elem).text().length !== 0) {
          let element = $(elem);

          let snippet = element
            .html()
            .replace(/<br>/g, "\n")
            .replace(/<(?!\s*br\s*\/?)[^>]+>/gi, "");

          lyrics += $("<textarea/>").html(snippet).text().trim() + "\n\n";
        }
      });
    }

    if (!lyrics) return "";
    return lyrics.trim();
  } catch (e) {
    throw e;
  }
};
