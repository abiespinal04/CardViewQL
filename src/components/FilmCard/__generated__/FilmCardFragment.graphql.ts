/**
 * @generated SignedSource<<6f0fb2511f7585574e091b3f6cfa990a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FilmCardFragment$data = {
  readonly director: string | null | undefined;
  readonly episodeID: number | null | undefined;
  readonly releaseDate: string | null | undefined;
  readonly title: string | null | undefined;
  readonly " $fragmentType": "FilmCardFragment";
};
export type FilmCardFragment$key = {
  readonly " $data"?: FilmCardFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"FilmCardFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "FilmCardFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "episodeID",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "director",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "releaseDate",
      "storageKey": null
    }
  ],
  "type": "Film",
  "abstractKey": null
};

(node as any).hash = "bfb8794089bcf02bc5c015f3b12e66ec";

export default node;
