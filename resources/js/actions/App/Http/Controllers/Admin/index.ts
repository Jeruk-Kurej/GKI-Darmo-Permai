import ScheduleController from './ScheduleController'
import BulletinController from './BulletinController'
import EventController from './EventController'
import MediaItemController from './MediaItemController'

const Admin = {
    ScheduleController: Object.assign(ScheduleController, ScheduleController),
    BulletinController: Object.assign(BulletinController, BulletinController),
    EventController: Object.assign(EventController, EventController),
    MediaItemController: Object.assign(MediaItemController, MediaItemController),
}

export default Admin