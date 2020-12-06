# Notes regarding the project

## Time table

Task | Time (hs)
--- | ---
Visual side/UI | 1.5
Cell references | 0.25
Cleanup and refactors | 1
Persistance and links | 2

## Usage

To run: 

`npm i; npm start`

* Click on a cell to edit its value.
* Enter and Tab will save the edited value. Esc or clicking outside will discard the change.
* You can enter plain values or references to other cells with the format `={COL}{ROW}`. For example `=AB25`.
* References will be solved recursively, however, out of bounds and circular references will show an error.
* Clicking in the link button at the bottom right will save the current sheet to local storage with an ID and copy the url for that sheet to the clipboard.
