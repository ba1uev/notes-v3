
var Editor = React.createClass({
  // getInitialState(){
  //   return {
  //     title: 'title' in localStorage ? localStorage.title : 'Hello'
  //   }
  // },
  onTitleChange(e) {
    localStorage.title = e.target.innerHTML;
  },
  onBodyChange(e) {
    localStorage.body = e.target.innerHTML;
  },
  title: localStorage.title,
  body: localStorage.body,
  render: function(){
    // var title = this.props.note[0].title;
    // var body = this.props.note[0].body;
    return (
      <div className="editor">
        <div className="editor-title" contentEditable={true} onKeyUp={this.onTitleChange}>{this.title}</div>
        <div className="editor-body" contentEditable={true} onKeyUp={this.onBodyChange}>{this.body}</div>
      </div>
    );
  }
});

var NOTES = [{
  id: 1,
  title: 'Super wow title </code>',
  body: 'Body of new note///.'
}];

ReactDOM.render(
  <Editor note={NOTES} />,
  document.getElementById('cont')
);
