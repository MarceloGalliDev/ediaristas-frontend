module.exports = (plop, handlers) => {
  plop.setGenerator("partials", {
    description: "Partials",
    prompts: [
      {
        name: "name",
        type: "input",
        message: "Nome da Partials: ",
      },
      {
        name: "folder",
        type: "input",
        message: "Nome da Pasta: ",
      },
    ],
    actions(data) {
      const actions = [
        {
          type: "add",
          path: `src/UI/partials/${data.folder.toLowerCase()}/_${handlers.createFilename(
            data.name
          )}.tsx`,
          templateFile: "plop/page/partial-template.hbs",
        },
        {
          type: "add",
          path: `src/UI/partials/${data.folder.toLowerCase()}/_${handlers.createFilename(
            data.name
          )}.styled.tsx`,
          templateFile: "plop/page/partial-style-template.hbs",
        },
      ];

      return actions;
    },
  });
};
