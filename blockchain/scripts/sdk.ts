import { ethers } from 'ethers';
import json from '../artifacts/contracts/Voenmeh.sol/Voenmeh.json'


export class Voenmeh {
    contract: ethers.Contract

    constructor(address: string, signerOrProvider?: ethers.Signer | ethers.providers.Provider) {
        this.contract = new ethers.Contract(address, json.abi, signerOrProvider ? signerOrProvider : new ethers.providers.JsonRpcProvider())
    }

    addNewStudents = (students: Student[]) => {
        return this.contract.addNewStudents(students)
    }

    getStudentById = async (id: number) => {
        return this.contract.getStudentById(id)
    }

    changeStatusToGraduate = async (ids: number[]) => {
        return this.contract.changeStatusToGraduate(ids)
    }
}


export enum StudentStatus {
    student,
    expelled,
    academy,
    graduate
}
export enum AcademicQualification {
    bachelor,
    magistracy,
    specialist
}

export enum Faculty {
    O,
    E,
    I,
    R,
    A
}

export type Student = {
    id: number;
    name: string;
    secondName: string;
    thirdName: string;
    start: number;
    end: number;
    photo: string;
    birthday: number;
    directionOfStudyCode: string;
    faculty: Faculty;
    status: StudentStatus;
    qualification: AcademicQualification;
}

export const makeStudent = (name: string, secondName: string, thirdName: string, start: number, photo: string, birthday: number, directionOfStudyCode: string, faculty: Faculty, qualification: AcademicQualification): Student => {
    return {
        name,
        secondName,
        thirdName,
        start,
        photo,
        birthday,
        directionOfStudyCode,
        faculty,
        qualification,
        id: 0,
        status: StudentStatus.student,
        end: 0
    }
}