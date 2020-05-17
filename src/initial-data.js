
import today from './assets/icons/today-ico.svg';
import someday from './assets/icons/someday-ico.svg';
import anytime from './assets/icons/quickly-ico.svg';
import done from './assets/icons/done-ico.svg';
import trash from './assets/icons/trash-ico.svg';

const intialData = {
    tasks: {
        'task-1': { id: 'task-1',
                    title: 'Hand sanitizer',
                    note: '5% solution (max 5$)',
                    check: false
        },
        'task-2': { id: 'task-2',
                    title: 'Estimated Taxes',
                    note: 'Free',
                    check: false
        },
        'task-3': { id: 'task-3',
                    title: 'React.js documentation',
                    note: 'Read text about components',
                    check: false
        },        
        'task-4': { id: 'task-4',
                    title: 'Hand sanitizer',
                    note: '5% solution (max 5$)',
                    check: false
        },        
        'task-5': { id: 'task-5',
                    title: 'Test iOS 13.4',
                    note: '',
                    check: false
        },        
        'task-6': { id: 'task-6',
                    title: 'Download MacOS Catalina',
                    note: '',
                    check: true
        }  
    },
    columns: {
    'column-1': {
        id: 'column-1',
        title: 'Today',
        ico: today,
        taskIds: ['task-1','task-2'],
    },
    'column-2': {
        id: 'column-2',
        title: 'Someday',
        ico: someday,
        taskIds: ['task-3'],
    },
    'column-3': {
        id: 'column-3',
        title: 'Anytime',
        ico: anytime,
        taskIds: ['task-4', 'task-5'],
    },
    'column-4': {
        id: 'column-4',
        title: 'Done',
        ico: done,
        taskIds: ['task-6'],
    },
    'column-5': {
        id: 'column-5',
        title: 'Trash',
        ico: trash,
        taskIds: [],
    }
    
},
columnOrder: ['column-1', 'column-2', 'column-3', 'column-4', 'column-5'],
activeCategory: 'column-1'
}
export default intialData;