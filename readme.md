# <center> Mask-Censored-Text V1 </center>

Production view [here](https://durgeshsingh043.github.io/mask-censored-text/)

## Getting started on local machine setup

To start building a new web component using Stencil, clone this repo to a new directory:

```bash
git clone https://github.com/DurgeshSingh043/mask-censored-text.git
cd mask-censored-text
```

and run:

```bash
npm install
npm start
```

To build the component for production, run:

```bash
npm run build
```

To run the unit tests for the components, run:

```bash
npm test
```

Need help? Check out stencil docs [here](https://stenciljs.com/docs/my-first-component).

`npm start` will run the code and open a browser with `http://localhost:3333/` url(port can be change on different machine or OS). The application will up and running on local. 

Please enter a string of keywords and phrases text box like `Lorem ipsum bibendum 'Nunc in suscipit justo' bibendum` and select ` space ` from dropdown. After these steps, please look at the setting section and choose as per requirement and copy paste text <code> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in suscipit justo. Morbi bibendum dui arcu, in dictum augue rhoncus eget. Phasellus et vulputate metus, consectetur tempus leo. Sed eu metus accumsan velit pharetra venenatis non a tortor. Praesent vel varius metus. Sed ut efficitur sem, ut rutrum mauris. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam faucibus scelerisque ipsum tempus bibendum. Aenean scelerisque lacus vitae ultricies bibendum.

Duis et ligula velit. Morbi vel hendrerit tellus, quis sagittis est. Nulla dictum dui et metus sagittis ultricies. Nam vitae urna egestas, hendrerit dui vitae, iaculis orci. Duis vehicula faucibus dolor eu vestibulum. Phasellus bibendum dolor nisl, sed scelerisque urna placerat sed. Pellentesque gravida arcu nisi, ut scelerisque diam congue at. Proin varius nibh vitae tristique pharetra. Praesent in odio velit. Morbi sed augue ultrices, hendrerit lorem et, blandit sem. Nunc semper feugiat orci, quis bibendum est malesuada non. Mauris eu magna eget lectus mattis efficitur. Nunc nunc tellus, sodales sed tristique id, tempor id lectus. In nisi velit, cursus sed euismod id, fringilla nec nunc. Maecenas eu hendrerit ipsum, et ornare elit. </code> in textarea field. At last step, Please click on masked button to mask the text. Now masked text will get appear in right (bottom in mobile view) side of text area. 

One more option is there to run analyser to see string or phrases frequency in document text.

### Output will look like below screen shots (based on above inputs)
![run-1](https://user-images.githubusercontent.com/45793814/179830649-1b0732a0-ca3a-4760-aeea-bb3733160c9a.PNG)
![run-2](https://user-images.githubusercontent.com/45793814/179830679-825bece9-e16c-4ac2-ab23-caf540424b5f.PNG)

## Some important features are
- User can enter the string of keywords and phrases and select delimiter from dropdown.
- User can choose setting accordingly
- User can place a document text as long as he/she want. This application is tested with <strong>25k word counts</strong>.
- User can click on masked button and see the masked text.
- User can also run the analysis to see the frequency of string of keywords and phrases.

## Some important point about the code
- Design is responsive and followed by <strong>mobile first apporoach</strong>.
- Code is following standard coding practices with software design principles like DRY, KISS, SOP to make sure clean and maintainable code.
- Used SCSS for moduler and reusable styling and responsive measure rem for spacing.
- Followed functional design pattern and used <strong>pure functions with unit test cases</strong>.
- Generate dynamic masking util function is using memoization technic. If this function is requested for a new length then masked string will get created and store for next time and if next request is with any existing len, function will just and check and return the masked string. It is too fast by the performance.

## Test case coverage:
![test-cases-successful](https://user-images.githubusercontent.com/45793814/179819026-2d2df3b1-ed6a-4f3b-ac30-42a009879424.PNG)

## Product screenshots:

### Desktop view:
![production-desktop-view](https://user-images.githubusercontent.com/45793814/179818872-73eee8af-5d42-47da-b000-b5a75631ad27.PNG)

### Mobile View:
![production-mobile-view](https://user-images.githubusercontent.com/45793814/179818936-edab0bdd-d74a-43a6-9e8c-737b22b45bbf.PNG)

## Performance measures with lighthouse reports:

### Desktop:
![lighthouse-desktop-report](https://user-images.githubusercontent.com/45793814/179817671-f01cb180-b338-49bd-83ac-d4b2e33e89b3.PNG)

### Mobile:
![lighthouse-mobile-report](https://user-images.githubusercontent.com/45793814/179817810-753ec53c-e719-43a8-9f87-8b3ce561775c.PNG)


# <center> Mask-Censored-Text V2 </center>

- Graphical view of word analyser
- Optimized way to enable automatic masking of document text
- 

