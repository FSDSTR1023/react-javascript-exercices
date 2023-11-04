export const Card = (props) => {
  const { id, title, Component } = props;
  return (
    <div id={id} className="p-5 border border-slate-300 rounded-md">
      <h3 className="text-orange-500 text-xl font-bold mb-2">{title}</h3>
      {Component}
    </div>
  );
};
