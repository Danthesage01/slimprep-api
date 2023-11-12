class Employee {
  constructor(id, name, image, designation, level, status, salary, score) {
    (this.id = id),
      (this.name = name),
      (this.image = image),
      (this.designation = designation),
      (this.level = level),
      (this.status = status),
      (this.salary = salary),
      (this.score = score);
  }
}
const Employees = [
  new Employee(
    "e1",
    "Dawodu Michael",
    "https://res.cloudinary.com/dyk76szsd/image/upload/v1699798647/Speaker-41808_mgrh6q.jpg",
    "Software Developer",
    4,
    "No Change",
    200000,
    76
  ),
  new Employee(
    "e2",
    "Smith Rowe",
    "https://res.cloudinary.com/dyk76szsd/image/upload/v1699798647/Speaker-39062_kyswgq.jpg",
    "Product Manager",
    3,
    "Demotion",
    180000,
    6
  ),
  new Employee(
    "e3",
    "Johnny Evans",
    "https://res.cloudinary.com/dyk76szsd/image/upload/v1699798643/Speaker-10808_ql7em2.jpg",
    "Product Designer",
    4,
    "Promotion",
    200000,
    80
  ),
  new Employee(
    "e4",
    "Yemi Alade",
    "https://res.cloudinary.com/dyk76szsd/image/upload/v1699798643/Speaker-10803_y2inod.jpg",
    "Technical Writer",
    2,
    "Demotion",
    120000,
    45
  ),
  new Employee(
    "e5",
    "Tommy Shelby",
    "https://res.cloudinary.com/dyk76szsd/image/upload/v1699798642/Speaker-8590_gkbtux.jpg",
    "Product Owner",
    5,
    "Demotion",
    250000,
    49
  ),
  new Employee(
    "e6",
    "Rose Sanders",
    "https://res.cloudinary.com/dyk76szsd/image/upload/v1699798641/Speaker-8367_jqcifv.jpg",
    "DevOps Engineer ",
    0,
    "Termination",
    70000,
    29
  ),
  new Employee(
    "e7",
    "Hope Alive",
    "https://res.cloudinary.com/dyk76szsd/image/upload/v1699798636/Speaker-1530_ey4ijz.jpg",
    "QA Engineer ",
    5,
    "Promotion",
    250000,
    90
  ),
  new Employee(
    "e8",
    "King Mark",
    "https://res.cloudinary.com/dyk76szsd/image/upload/v1699798641/Speaker-6548_usus9i.jpg",
    "DevOps Engineer ",
    3,
    "No Change",
    180000,
    70
  ),
  new Employee(
    "e9",
    "Jumoke Olawale",
    "https://res.cloudinary.com/dyk76szsd/image/upload/v1699798632/female_bapuwg.jpg",
    "Frontend Engineer Intern",
    0,
    "Promotion",
    70000,
    85
  ),
  new Employee(
    "e10",
    "Victor Stone",
    "https://res.cloudinary.com/dyk76szsd/image/upload/v1699798636/Speaker-1269_arvtwd.jpg",
    "Product Designer ",
    4,
    "Demotion",
    200000,
    48
  ),
  new Employee(
    "e11",
    "Habeeb Salem",
    "https://res.cloudinary.com/dyk76szsd/image/upload/v1699798635/Speaker-1124_rdzoik.jpg",
    "Product Designer ",
    4,
    "Termination",
    200000,
    0
  ),
  new Employee(
    "e12",
    "Dan Brown",
    "https://res.cloudinary.com/dyk76szsd/image/upload/v1699798640/Speaker-5996_cxxpny.jpg",
    "Technical Support",
    5,
    "Promotion",
    250000,
    91
  ),
  new Employee(
    "e13",
    "George Michael",
    "https://res.cloudinary.com/dyk76szsd/image/upload/v1699798647/Speaker-41808_mgrh6q.jpg",
    "Software Developer",
    4,
    "No Change",
    200000,
    76
  ),
  new Employee(
    "e14",
    "Howard Rowe",
    "https://res.cloudinary.com/dyk76szsd/image/upload/v1699798647/Speaker-39062_kyswgq.jpg",
    "Product Manager",
    3,
    "Demotion",
    180000,
    6
  ),
  new Employee(
    "e15",
    "Matt Evans",
    "https://res.cloudinary.com/dyk76szsd/image/upload/v1699798643/Speaker-10808_ql7em2.jpg",
    "Product Designer",
    4,
    "Promotion",
    200000,
    80
  ),
  new Employee(
    "e16",
    "Joe Alade",
    "https://res.cloudinary.com/dyk76szsd/image/upload/v1699798643/Speaker-10803_y2inod.jpg",
    "Technical Writer",
    2,
    "Demotion",
    120000,
    45
  ),
  new Employee(
    "e17",
    "John Shelby",
    "https://res.cloudinary.com/dyk76szsd/image/upload/v1699798642/Speaker-8590_gkbtux.jpg",
    "Product Owner",
    5,
    "Demotion",
    250000,
    49
  ),
  new Employee(
    "e18",
    "Mary Sanders",
    "https://res.cloudinary.com/dyk76szsd/image/upload/v1699798641/Speaker-8367_jqcifv.jpg",
    "DevOps Engineer ",
    0,
    "Termination",
    70000,
    29
  ),
  new Employee(
    "e19",
    "Victory Benson",
    "https://res.cloudinary.com/dyk76szsd/image/upload/v1699798636/Speaker-1530_ey4ijz.jpg",
    "QA Engineer ",
    5,
    "Promotion",
    250000,
    90
  ),
  new Employee(
    "e20",
    "Justin Mark",
    "https://res.cloudinary.com/dyk76szsd/image/upload/v1699798641/Speaker-6548_usus9i.jpg",
    "DevOps Engineer ",
    3,
    "No Change",
    180000,
    70
  ),
  new Employee(
    "e21",
    "Grace Judith",
    "https://res.cloudinary.com/dyk76szsd/image/upload/v1699798632/female_bapuwg.jpg",
    "Frontend Engineer Intern",
    0,
    "Promotion",
    70000,
    85
  ),
  new Employee(
    "e22",
    "Salem Peace",
    "https://res.cloudinary.com/dyk76szsd/image/upload/v1699798636/Speaker-1269_arvtwd.jpg",
    "Product Designer ",
    4,
    "Demotion",
    200000,
    48
  ),
];

exports.handler = async (event, context, cb) => {
  return {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    statusCode: 200,
    body: JSON.stringify(Employees),
  };
};
