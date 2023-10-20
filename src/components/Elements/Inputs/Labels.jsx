const Label = (props) => {
  const { htmlFor, children } = props;

  return (
    <label htmlFor={htmlFor} className="block text-slate-300">
      {children}
    </label>
  );
};

export default Label;
