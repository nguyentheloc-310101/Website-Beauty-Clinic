import { TService } from "@/interfaces/stream/session-stream";

export type TOrderService = {
    quantity: number;
    service: TService;
};
export function getOrderStorage(): TOrderService[] {
    if (typeof window !== "undefined") {
        let orderInfo = localStorage.getItem("order");
        if (orderInfo) {
            return JSON.parse(orderInfo).order;
        }
    }

    return [];
}
export function setOrderStorage(order: { order: TOrderService[] }) {
    if (typeof window !== "undefined") {
        localStorage.setItem("order", JSON.stringify(order));
    }
}
export function clearOrder() {
    if (typeof window !== "undefined") {
        localStorage.removeItem("order");
    }
}
export function addServiceToOrder(quantity: number, _service: TService) {
    if (typeof window !== "undefined") {
        let orderInfo = localStorage.getItem("order");
        if (orderInfo) {
            let order = JSON.parse(orderInfo).order;
            console.log(
                order.some((service: TOrderService) => {
                    return service.service.id == _service.id;
                })
            );
            if (
                order.some(
                    (service: TOrderService) =>
                        service.service.id == _service.id
                )
            ) {
                return plusManyToService(quantity, _service.id);
            }
            order.push({ quantity, service: _service });
            setOrderStorage({ order: order });
            return order;
        } else {
            setOrderStorage({ order: [{ quantity, service: _service }] });
            return [{ quantity, service: _service }];
        }
    }
}
export function editService(quantity: number, serviceId: string) {
    if (typeof window !== "undefined") {
        let orderInfo = localStorage.getItem("order");
        if (orderInfo) {
            let order = JSON.parse(orderInfo);
            let index = -1;
            order.order.forEach((service: TOrderService, idx: number) => {
                if (service.service.id == serviceId) {
                    index = idx;
                }
            });
            if (index != -1) {
                let tempOrder = [...order.order];
                tempOrder[index].quantity = quantity;
                setOrderStorage({ order: tempOrder });
                return tempOrder;
            }
            return order.order;
        }
        return [];
    }
}
export function removeServiceToOrder(serviceId: string) {
    if (typeof window !== "undefined") {
        let orderInfo = localStorage.getItem("order");
        if (orderInfo) {
            let order = JSON.parse(orderInfo);
            let index = -1;
            order.order.forEach((service: TOrderService, idx: number) => {
                if (service.service.id == serviceId) {
                    index = idx;
                }
            });

            if (index != -1) {
                let tempOrder = [...order.order];
                tempOrder.splice(index, 1);
                setOrderStorage({ order: tempOrder });
                return tempOrder;
            }
            return order.order;
        }
        return [];
    }
}

export function plusOneToService(serviceId: string) {
    if (typeof window !== "undefined") {
        let orderInfo = localStorage.getItem("order");
        if (orderInfo) {
            let order = JSON.parse(orderInfo);
            let index = -1;
            order.order.forEach((service: TOrderService, idx: number) => {
                if (service.service.id == serviceId) {
                    index = idx;
                }
            });
            if (index != -1) {
                let tempOrder = [...order.order];
                tempOrder[index].quantity += 1;
                setOrderStorage({ order: tempOrder });
                return tempOrder;
            }
            return order.order;
        }
        return [];
    }
}
export function plusManyToService(quantity: number, serviceId: string) {
    if (typeof window !== "undefined") {
        let orderInfo = localStorage.getItem("order");
        if (orderInfo) {
            let order = JSON.parse(orderInfo);
            let index = -1;
            order.order.forEach((service: TOrderService, idx: number) => {
                if (service.service.id == serviceId) {
                    index = idx;
                }
            });
            if (index != -1) {
                let tempOrder = [...order.order];
                tempOrder[index].quantity += quantity;
                setOrderStorage({ order: tempOrder });
                return tempOrder;
            }
            return order.order;
        }
        return [];
    }
}
export function minusOneToService(serviceId: string) {
    if (typeof window !== "undefined") {
        let orderInfo = localStorage.getItem("order");
        if (orderInfo) {
            let order = JSON.parse(orderInfo);
            let index = -1;
            order.order.forEach((service: TOrderService, idx: number) => {
                if (service.service.id == serviceId) {
                    index = idx;
                }
            });
            if (index != -1) {
                let tempOrder = [...order.order];
                tempOrder[index].quantity -= 1;
                setOrderStorage({ order: tempOrder });
                return tempOrder;
            }
            return order.order;
        }
        return [];
    }
}
