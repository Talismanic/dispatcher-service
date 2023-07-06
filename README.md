# dispatcher-service
This is an example implementation of distributed tracing without using open telemetry in old-fashioned way using CLS.

In a microservice environment we often see a lot of service to service call. To track all the logs of a specific call among the services we now have industry standard Open Telemetry. However, if for someone that becomes overhead, may be because only 2-3 services they have, they can achive similar thing using this example.

There are three simple steps:

1️⃣ Write a trace generator middleware with the help of local storage packages like continous-local-storage(cls). We can check whether trace-id is present in request context. If present we will use that, otherwise we will generate that.<br />
2️⃣ Intercept HTTP clients to inject the trace-id in the outgoing request.<br />
3️⃣ Override the logger to add the trace-id in all logs that developers printed.<br />

<img width="797" alt="image" src="https://github.com/Talismanic/dispatcher-service/assets/21278048/ddb4100c-efac-4095-ac40-4210739f8504">
