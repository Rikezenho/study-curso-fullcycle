FROM golang:1.13 AS builder

WORKDIR /go/src/app
COPY . .

RUN go get -d -v ./...
RUN go install -v ./...
RUN go build -o /go/src/app/hello

FROM scratch
COPY --from=builder /go/src/app/hello /hello

ENTRYPOINT [ "/hello" ]