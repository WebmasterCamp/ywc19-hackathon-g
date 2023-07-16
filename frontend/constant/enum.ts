export enum SalaryOptions {
  BELOW_20K = 'BELOW_20K',
  BETWEEN_20K_30K = 'BETWEEN_20K_30K',
  BETWEEN_30K_50K = 'BETWEEN_30K_50K',
  BETWEEN_50K_70K = 'BETWEEN_50K_70K',
  ABOVE_70K = 'ABOVE_70K',
}

export const salaryMapping = {
  [SalaryOptions.BELOW_20K]: 'น้อยกว่า 20,000 บาท',
  [SalaryOptions.BETWEEN_20K_30K]: '20,000 - 30,000 บาท',
  [SalaryOptions.BETWEEN_30K_50K]: '30,000 - 50,000 บาท',
  [SalaryOptions.BETWEEN_50K_70K]: '50,000 - 70,000 บาท',
  [SalaryOptions.ABOVE_70K]: 'มากกว่า 70,000 บาท',
}

export enum JobOptions {
  AC = 'AC',
  ELECTRICAL = 'ELECTRICAL',
  CONSTRUCTION = 'CONSTRUCTION',
  OTHERS = 'OTHERS',
  WATER = 'WATER',
}

export const jobMapping = {
  [JobOptions.AC]: 'ช่างแอร์',
  [JobOptions.ELECTRICAL]: 'ช่างไฟฟ้า',
  [JobOptions.WATER]: 'ช่างประปา',
  [JobOptions.CONSTRUCTION]: 'ช่างก่อสร้าง',
  [JobOptions.OTHERS]: 'อื่นๆ',
}

export enum ExperienceOptions {
  LESS_THAN_1_YEAR = 'LESS_THAN_1_YEAR',
  BETWEEN_1_3_YEAR = 'BETWEEN_1_3_YEAR',
  BETWEEN_3_5_YEAR = 'BETWEEN_3_5_YEAR',
  BETWEEN_5_7_YEAR = 'BETWEEN_5_7_YEAR',
  ABOVE_7_YEAR = 'ABOVE_7_YEAR',
}

export const experienceMapping = {
  [ExperienceOptions.LESS_THAN_1_YEAR]: 'น้อยกว่า 1 ปี',
  [ExperienceOptions.BETWEEN_1_3_YEAR]: '1 - 3 ปี',
  [ExperienceOptions.BETWEEN_3_5_YEAR]: '3 - 5 ปี',
  [ExperienceOptions.BETWEEN_5_7_YEAR]: '5 - 7 ปี',
  [ExperienceOptions.ABOVE_7_YEAR]: 'มากกว่า 7 ปี',
}

export enum ContractOptions {
  FULL_TIME = 'FULL_TIME',
  PART_TIME = 'PART_TIME',
  CONTRACT = 'CONTRACT',
  TEMPORARY = 'TEMPORARY',
  FREELANCE = 'FREELANCE',
}

export const contractMapping = {
  [ContractOptions.FULL_TIME]: 'เต็มเวลา',
  [ContractOptions.PART_TIME]: 'นอกเวลา',
  [ContractOptions.CONTRACT]: 'สัญญาจ้าง',
  [ContractOptions.TEMPORARY]: 'ชั่วคราว',
  [ContractOptions.FREELANCE]: 'ฟรีแลนซ์',
}

export const monthMapping = {
  1: 'มกราคม',
  2: 'กุมภาพันธ์',
  3: 'มีนาคม',
  4: 'เมษายน',
  5: 'พฤษภาคม',
  6: 'มิถุนายน',
  7: 'กรกฎาคม',
  8: 'สิงหาคม',
  9: 'กันยายน',
  10: 'ตุลาคม',
  11: 'พฤศจิกายน',
  12: 'ธันวาคม',
}

export type Course = {
  id?: string
  name: string
  description: string
  location: string
  lesson: {
    lessonNo: number
    title: string
    dateTime: string
  }[]
  duration: string
  img: string
  certificate?: boolean
  test?: boolean
}
