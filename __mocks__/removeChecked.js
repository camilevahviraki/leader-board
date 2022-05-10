import UserTask from './addAndRemove';
import 'jest-localstorage-mock';

const removeChecked = () => {
  const checkBoxs = document.querySelectorAll('.check');
  const TasksR = JSON.parse(localStorage.getItem('TaskToday'));
  checkBoxs.forEach((check, i) => {
    check = () => {
      if (TasksR[i].completed === true) {
        TasksR[i].completed = false;
        checkBoxs[i].checked = false;
        localStorage.setItem('TaskToday', JSON.stringify(TasksR));
      } else {
        TasksR[i].completed = true;
        checkBoxs[i].checked = true;
        localStorage.setItem('TaskToday', JSON.stringify(TasksR));
      }
    };

    function buttonRemove() {
      new UserTask().updateId();
      const BookFiltered = TasksR.filter((book) => book.completed !== true);
      localStorage.setItem('TaskToday', JSON.stringify(BookFiltered));
      // location.reload();
    }
  });
};

export default removeChecked;