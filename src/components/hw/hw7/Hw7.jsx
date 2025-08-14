import { Component } from "react";
import {
  Wrapper,
  Form,
  Input,
  AddButton,
  TaskListEl,
  TaskItem,
  DeleteButton,
} from "./Styles/Hw7Style";

export const Hw7 = () => {
  class TaskList extends Component {
    state = {
      tasks: [
        { id: 1, text: "Task 1" },
        { id: 2, text: "Task 2" },
        { id: 3, text: "Task 3" },
      ],
      newTask: "",
    };

    handleChange = (e) => {
      this.setState({ newTask: e.target.value });
    };

    addTask = (e) => {
      e.preventDefault();
      if (!this.state.newTask.trim()) return;

      const newTaskObj = {
        id: this.state.tasks.length > 0 ? this.state.tasks[this.state.tasks.length - 1].id + 1 : 1,
        text: this.state.newTask,
      };

      this.setState((prevState) => ({
        tasks: [...prevState.tasks, newTaskObj],
        newTask: "",
      }));
    };

    handleDelete = (e) => {
      const id = e.target.dataset.id;
      if (!id) return;
      this.setState((prevState) => ({
        tasks: prevState.tasks.filter((task) => task.id !== Number(id)),
      }));
    };

    render() {
      return (
        <Wrapper>
          <Form onSubmit={this.addTask}>
            <h2>Add task</h2>
            <Input
              type="text"
              placeholder="Write new task"
              value={this.state.newTask}
              onChange={this.handleChange}
            />
            <AddButton type="submit">Add</AddButton>
          </Form>

          <TaskListEl onClick={this.handleDelete}>
            {this.state.tasks.map((task) => (
              <TaskItem key={task.id}>
                <span>{task.text}</span>
                <DeleteButton data-id={task.id}>Delete</DeleteButton>
              </TaskItem>
            ))}
          </TaskListEl>
        </Wrapper>
      );
    }
  }
  return <TaskList />;
};
