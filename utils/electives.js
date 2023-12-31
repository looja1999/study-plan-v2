import { courses } from "./courses";

const electives = (selectUnits) => {
    const completedUnits = selectUnits;

    const allElectives = courses.filter(course => course.unitType === 'SE');
    const eligibleElectives = allElectives.filter(elective => elective.unitDependency.length === 0 && !completedUnits.includes(elective.unitCode))

    allElectives.map(
        elective => {
            const totalDependency = elective.unitDependency.length;
            const tempDependencyCheck = []
            if (elective.unitDependency.length > 0) {
                elective.unitDependency.map(
                    dependency => {
                        if (completedUnits.includes(dependency)) {
                            tempDependencyCheck.push(dependency)
                        }
                    }
                )

                if (tempDependencyCheck.length === totalDependency && !completedUnits.includes(elective.unitCode)) {
                    eligibleElectives.push(elective)
                }
            }
        }
    )


    return (eligibleElectives)

};

export default electives; 