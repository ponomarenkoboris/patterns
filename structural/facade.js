class Complates {
    constructor() {
        this.complaints = []
    }
    replay(complaints) {}

    add (complaints) {
        this.complaints.push(complaints);
        return this.replay(complaints)
    }
} 
class ProductComplaints extends Complates {
    replay({id, customer, details}) {
        return `Product: ${id}: ${customer} (${details})`
    }
}
class ServiceComplaints extends Complates {
    replay({id, customer, details}) {
        return `Product: ${id}: ${customer} (${details})`
    }
}
class ComplaintRegistry {
    register(customer, type, details) {
        const id = Date.now();
        let complaint;

        if (type === 'service') {
            complaint = new ServiceComplaints();
        } else {
            complaint = new ProductComplaints();
        }

        return complaint.add({ id, customer, details });
    }
}

const registry = new ComplaintRegistry()
console.log(registry.register('Boris', 'service', 'service complaint'))
console.log(registry.register('Anna', 'product', 'product complaint'))