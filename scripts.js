let gitLesson = {
    lector: 'Andrew Luca',
    meetingDate: 'March 23, 2022',
    topic: 'GIT'
}

const myFunc = () => {
    for (const iterator in gitLesson) {
        document.write(`${iterator}: ${gitLesson[iterator]} <br>`)
    }
}

const MYNAME = 'Pavlo Charnyi'