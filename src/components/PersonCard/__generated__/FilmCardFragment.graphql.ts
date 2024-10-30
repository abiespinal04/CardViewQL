/**
 * @generated SignedSource<<d50311b7a484e888a5d15f7310bead71>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type FilmCardFragment$data = {
  readonly id: string;
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
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    }
  ],
  "type": "Film",
  "abstractKey": null
};

(node as any).hash = "e408b0ae439f26591355dff72ca0d828";

export default node;
