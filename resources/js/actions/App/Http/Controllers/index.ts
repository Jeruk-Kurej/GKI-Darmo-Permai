import Teams from './Teams'
import Admin from './Admin'
import Settings from './Settings'

const Controllers = {
    Teams: Object.assign(Teams, Teams),
    Admin: Object.assign(Admin, Admin),
    Settings: Object.assign(Settings, Settings),
}

export default Controllers