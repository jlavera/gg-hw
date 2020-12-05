# Gourmet Growth Frontend Takehome

## Design Requirements 
Please design and build a simple spreadsheet. The spreadsheet should have the following specifications: 
- support at least 100 rows (visually indexed by numbers) and at least 26 columns visually indexed by the alphabet (A, B, C, .. etc) 
- when the user clicks on an individual cell, the cell should visually highlight in some way. See Example: 
- when the user starts typing when the cell is visually highlighted, then any keyboard input should show up in the cell. 
- if the cell's value starts with "=", then we know that what follows the "=" needs to be a reference to another cell. So if the user enters "=A1" in a cell, that cell will display the same value as A1. You do not need to implement any other types of formulas other than a simple straight reference. 
- if a referenced cell changes, then the dependent cells need to immediately change. 
- Somewhere on the page, the user also needs to be able to generate a unique link back to the same spreadsheet. This link can be copied and pasted into a different brower window which will open the same spreadsheet. You do not need to worry about read/write permissions. Going to the root url will create a new spreadsheet. 

## Stack Requirements
- You must use React for the frontend. 
- You may use any general purpose open source library. 
- You may NOT use any libraries specific to creating spreadsheets or the like. 
- You must have some type of persistent data structure such that the link to an existing spreadsheet will work. To that end, you may need to store the state of the spreadsheet in localStorage or sessionStorage. You need not implement an API backend. 

## Criteria 
You will be judge on: 
- The structure and quality of your code, 
- The abiility for your code to achieve the functionality described above. 

To be respectful of your time, you will not receive additional credit for implementing additional functionality not provided in the design requirements above. 