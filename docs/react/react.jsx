// 1 ---------
const hello = <h1>Hello JSX!</h1>;

// 2 ---------
const JSX = (
  <div>
    <h1>H1 Text</h1>
    <p>Paragraph Text</p>
    <ul>
      <li>List 1</li>
      <li>List 2</li>
      <li>List 3</li>
    </ul>
  </div>
);

// 3 ---------
{
    const JSX = (
        <div>
          {/*comment */}
          <h1>This is a block of JSX</h1>
          <p>Here's a subtitle</p>
        </div>
      );
      ReactDOM.render(JSX, document.getElementById('root'));
}

