var arrivalRate = prompt("Enter Arrival rate(lambda)")
var serviceRate = prompt("Enter service rate(Meu)")

var processorUtilization = arrivalRate/serviceRate
var avgQueueLength = processorUtilization/(1-processorUtilization)
var avgNoWaiting = (processorUtilization*processorUtilization)/(1-processorUtilization)
var avgWaitingTime = processorUtilization/(serviceRate*(1-processorUtilization))
var avgServiceTime = 1/serviceRate
var avgResponseTime = processorUtilization/(arrivalRate*(1-processorUtilization))