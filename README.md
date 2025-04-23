## Overall information

**Vercel page:** https://quiz-app-eight-teal.vercel.app/

**Stack**: React, TypeScript, Redux, Vite.

## JSON logic

Question data is in the `data.json` file in `./public` folder.

`.json` type structure:

```
  {
      id: "string"
      lang: "string"
      logo: "string"
      questions: {
          question: "string"
          answers: {
              answer: "string"
              isCorrect: true | false
          } []
      } []
  } []
```
