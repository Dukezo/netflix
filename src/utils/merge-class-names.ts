interface ConditionalClassName {
  [name: string]: boolean;
}

export default function mergeClassNames(
  ...classNames: (string | undefined | ConditionalClassName)[]
) {
  let filteredClassNames: string[] = [];

  classNames.forEach((className) => {
    if (className) {
      if (typeof className === 'object') {
        Object.entries(className as ConditionalClassName).forEach(
          ([name, condition]) => {
            if (condition) filteredClassNames.push(name);
          }
        );
      } else filteredClassNames.push(className);
    }
  });

  return filteredClassNames.join(' ');
}
