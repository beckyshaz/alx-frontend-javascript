export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new Error('Name must be a string');
    }
    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw new Error('Length must be a number');
    }
    if (
      Array.isArray(students)
      && students.every((student) => typeof student === 'string')) {
      this._students = students;
    } else {
      throw new Error('Students must be an array of strings');
    }
  }

  get name() {
    return this._name;
  }

  set name(newname) {
    this._name = newname;
  }

  get length() {
    return this._length;
  }

  set length(newlength) {
    this._length = newlength;
  }

  get students() {
    return this._students;
  }

  set students(newstudents) {
    this._students = newstudents;
  }
}
