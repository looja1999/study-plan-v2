import { courses } from "./courses";


const algorithm = (selectUnits, year, semester) => {
    // Get the list of all courses.
    const allCourses = courses;


    // Create a list of courses that the user needs to take.
    const neededCourses = [];
    const completedCourse = [];
    const recommendedCourse = [];
    let requiredToComplete = []


    const studyPlan = [
        [[], []], // year 1
        [[], []], // year 2
        [[], []], // year 3 
        [[], []]  // year 4
    ];


    // filtering courses that users needs to complete
    allCourses.map(
        course => {
            if (!selectUnits.includes(course.unitCode)) {
                neededCourses.push(course)
            } else {
                completedCourse.push(course.unitCode)
            }
        }
    );

    console.log(completedCourse)

    for (let i = +year; i < studyPlan.length; i++) {
        for (let j = 2; j > 0; j--) {
            if (i + j >= +year + +semester) {
                neededCourses.map(course => {
                    if (+course.year === i && +course.sem === j) {
                        studyPlan[i - 1][j - 1].push(course)
                        recommendedCourse.push(course.unitCode)
                    }

                    if (+course.year < +year + 1 && +course.sem === j && course.unitType !== 'SE' && !recommendedCourse.includes(course.unitCode)) {
                        if (!requiredToComplete.includes(course.unitCode)) requiredToComplete.push(course.unitCode)
                    }
                })
            }
        }
    };

    const extractingRequiredCourse = []
    // const extractingCouse = [...requiredToComplete.map(unitCode => courses.filter(course => course.unitCode === unitCode))];
    for (const course of requiredToComplete) {

        courses.map(courseTemp => {
            if (courseTemp.unitCode == course) {
                extractingRequiredCourse.push(courseTemp)
            }
        })
    }

    // cleaning the data
    for (const course of extractingRequiredCourse) {
        if (course.unitType === 'E') {
            studyPlan[+course.year][+course.sem - 1].push(course)
        } else {
            studyPlan[+course.year][+course.sem - 1].unshift(course)
        }
    };

    // creating study play 
    for (let i = 0; i < studyPlan.length; i++) {
        for (let j = 2; j > 0; j--) {
            // Checking for dependency 
            studyPlan[i][j - 1].map(course => {
                if (course.unitDependency && course.unitDependency.length > 0) {
                    course.unitDependency.map(
                        dependency => {
                            if (!completedCourse.includes(dependency)) {
                                const find = studyPlan[i][j - 1].find(unit => unit.unitCode === dependency)
                                if (find) {
                                    const index = studyPlan[i][j - 1].findIndex(unit => unit.unitCode === course.unitCode)
                                    const tempArray = (studyPlan[i][j - 1].splice(index, 1));

                                    for (const arr of tempArray) {
                                        studyPlan[i + 1][j - 1].unshift(arr)
                                    }

                                }
                            }
                        }
                    )
                }
            })

            while (studyPlan[i][j - 1].length > 4) {
                const course = (studyPlan[i][j - 1]).pop()
                if (course.unitType === 'E') {
                    studyPlan[i + 1][j - 1].push(course)
                } else {
                    studyPlan[i + 1][j - 1].unshift(course)
                }
            }
        }
    };

    console.log(studyPlan)
}

export default algorithm