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

## Commit book

**RU**

- **13.12.2023**

  Первоначальный коммит и начало разработки проекта. Визуализация страниц меню готова. (приблизительное затраченное время - 3~ часа)

- **14.12.2023**

  Завершение логики асинхронного фетчинга. Внедрил **Redux** для управления логикой состояния, использовал **useState, useEffect**. (приблизительное затраченное время - 3~ часа)

- **15.12.2023**

  Выполнил часть логики с параметрами замены стилей и видимости, думая о том, как я могу реализовать логику фетчинга JSON, чтобы сделать приложение максимально быстрым. Также реализована некоторая логика выбора ответа, это было сложно. Еще придется сделать деструктуризацию в компоненте «Вопрос». (приблизительное затраченное время - 9~ часов)

- **16.12.2023**-**17.12.2023**

  **Ничего не было сделано, потому что я заболел температурой 38°С :)**

- **18.12.2023**

  Проект завершен! Исправил массу ошибок **TypeScript**, доделал всю логику общего счета и выбора ответов, загрузил все на страницу **Vercel**. (приблизительное затраченное время - 7~ часов)

---

**EN**

- **13.12.2023**

  Intinial commit and start of the project development. Menu page visuals are done. (aprox. time usage - 3~ hours)

- **14.12.2023**

  Completion of async fetch logic. Implemented **Redux** to manage the state logic, **useState, useEffect** is used. (aprox. time usage - 3~ hours)

- **15.12.2023**

  Done some of the logic with style swapping and visibility options, thinking about how i can implement JSON fetching logic to make the app as fast as possible. Some answer choosing logic is also done, that was a hard. Still have to do destructurning in the Question component. (aprox. time usage - 9~ hours)

- **16.12.2023**-**17.12.2023**

  **Nothing was done, because i got sick with 38° C temerature :)**

- **18.12.2023**

  Project completed! fixed a ton of **TypeScript** errors, get all the logic for overall score and answer choosing going, uploaded everything on **Vercel** page. (aprox. time usage - 7~ hours)
