export class Case {
    case_no: string;
    branch: string;
    reporting_method: string;
    date: string;
    time: string;
    category: string;
    sub_category: string;
    priority: string;
    nature: string;
    case_manager: string;
    case_reporter: string;
    case_status: string;

    constructor(car : Case) {
        {
            this.case_no = car.case_no;
            this.branch = car.branch;
            this.reporting_method = car.reporting_method;
            this.date = car.date;
            this.time = car.time;
            this.category = car.category;
            this.sub_category = car.sub_category;
            this.priority = car.priority;
            this.nature = car.nature;
            this.case_manager = car.case_manager;
            this.case_reporter = car.case_reporter;
            this.case_status = car.case_status;
        }
    }
}