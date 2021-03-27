export default function mergeClassNames(...classNames: (string | undefined)[]) {
  let merged = '';

  classNames.forEach((className) => {
    if (className) merged += ` ${className}`;
  });

  return merged.trim();
}
