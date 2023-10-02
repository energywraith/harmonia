import { Song } from "@/types";

type GeniusResponse<Item> = Item extends Song
  ? {
      response: {
        hits: {
          result: Item;
        }[];
      };
    }
  : {
      response: {
        sections: {
          hits: {
            result: Item;
          }[];
        }[];
      };
    };

export interface GeniusFetchProps<Item> {
  searchParam: string;
  parseFunction: (response: GeniusResponse<Item>) => Item[];
}
