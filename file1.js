let gitLesson = {
    lector: 'Andrew Luca',
    meetingDate: 'March 23, 2022'
}

for (const iterator in gitLesson) {
    console.log(`${iterator} ${gitLesson[iterator]}`)    
}
