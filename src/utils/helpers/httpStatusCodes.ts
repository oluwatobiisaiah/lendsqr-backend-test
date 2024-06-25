/**
 * An object containing HTTP status codes and their descriptions.
 */
export const httpStatusCodes = {
    /**
     * The server has received the request headers and the client should proceed to send the request body.
     */
    CONTINUE: 100,
  
    /**
     * The requester has asked the server to switch protocols and the server has agreed to do so.
     */
    SWITCHING_PROTOCOLS: 101,
  
    /**
     * A standard response for successful HTTP requests.
     */
    OK: 200,
  
    /**
     * The request has been fulfilled, resulting in the creation of a new resource.
     */
    CREATED: 201,
  
    /**
     * The request has been accepted for processing, but the processing has not been completed.
     */
    ACCEPTED: 202,
  
    /**
     * The server is a transforming proxy that has received a 200 OK from its origin, but is returning a modified version of the origin's response.
     */
    NON_AUTHORITATIVE_INFORMATION: 203,
  
    /**
     * The server successfully processed the request and is not returning any content.
     */
    NO_CONTENT: 204,
  
    /**
     * The server successfully processed the request, but is not returning any content.
     */
    RESET_CONTENT: 205,
  
    /**
     * The server is delivering only part of the resource due to a range header sent by the client.
     */
    PARTIAL_CONTENT: 206,
  
    /**
     * A URL redirection response code that indicates the resource requested has been temporarily moved to the URL given by the Location headers.
     */
    MULTIPLE_CHOICES: 300,
  
    /**
     * The URL included with this request has been permanently moved. The new URL is specified in the Location header for the response.
     */
    MOVED_PERMANENTLY: 301,
  
    /**
     * The HTTP status code is used as a redirection response code and indicates that the resource requested has been temporarily moved to the URL given by the Location header.
     */
    FOUND: 302,
  
    /**
     * The server sent this response to direct the client to get the requested resource at another URI with a GET request.
     */
    SEE_OTHER: 303,
  
    /**
     * This is used for caching purposes. It tells the client that the response has not been modified, so the client can continue to use the same cached version of the response.
     */
    NOT_MODIFIED: 304,
  
    /**
     * Defined in the revision of RFC 2616 to use when the requested response must be accessed by a proxy.
     */
    USE_PROXY: 305,
  
    /**
     * This response code is no longer used; it is just reserved currently. It was used in a previous version of the HTTP/1.1 specification.
     */
    UNUSED: 306,
  
    /**
     * The server could not understand the request due to invalid syntax.
     */
    BAD_REQUEST: 400,
  
    /**
     * Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated".
     */
    UNAUTHORIZED: 401,
  
    /**
     * Reserved for future use.
     */
    PAYMENT_REQUIRED: 402,
  
    /**
     * The client does not have access rights to the content, i.e. they are unauthorized, so the server is rejecting to give a proper response.
     */
    FORBIDDEN: 403,
  
    /**
     * The server cannot find the requested resource.
     */
    NOT_FOUND: 404,
  
    /**
     * The request method is known by the server but is not supported by the target resource.
     */
    METHOD_NOT_ALLOWED: 405,
  
    /**
     * This response is sent when the web server, after performing server-driven content negotiation, doesn't find any content that conforms to the criteria given by the user agent.
     */
    NOT_ACCEPTABLE: 406,
  
    /**
     * This is similar to 401 Unauthorized but authentication is required and has failed or not yet been provided in the request.
     */
    PROXY_AUTHENTICATION_REQUIRED: 407,
  
    /**
     * This response is sent on an idle connection by some servers, even without any previous request by the client.
     */
    REQUEST_TIMEOUT: 408,
  
    /**
     * This response is sent after a request conflicts with the current state of the server.
     */
    CONFLICT: 409,
  
    /**
     * This response is sent when the requested content has been permanently deleted from the server, with no forwarding address.
     */
    GONE: 410,
  
    /**
     * The server rejected the request because the Content-Length header field is not defined and the server requires it.
     */
    LENGTH_REQUIRED: 411,
  
    /**
     * The client has indicated preconditions in its headers which the server does not meet.
     */
    PRECONDITION_FAILED: 412,
  
    /**
     * The server is rejecting the request because the request entity is larger than the server is willing or able to process.
     */
    PAYLOAD_TOO_LARGE: 413,
  
    /**
     * The server is refusing to process the request because the request URI is longer than the server is willing to interpret.
     */
    URI_TOO_LONG: 414,
  
    /**
     * The media format of the requested data is not supported by the server, so the server is rejecting the request.
     */
    UNSUPPORTED_MEDIA_TYPE: 415,
  
    /**
     * The range specified by the Range header field in the request cannot be fulfilled; it's possible that the range is outside the size of the target URI's data.
     */
    RANGE_NOT_SATISFIABLE: 416,
  
    /**
     * This response code means the expectation indicated by the Expect request header field cannot be met by the server.
     */
    EXPECTATION_FAILED: 417,
  
    /**
     * The server refuses the attempt to brew coffee with a teapot.
     */
    I_AM_A_TEAPOT: 418,
  
    /**
     * The request was directed at a server that is not able to produce the requested response.
     */
    MISDIRECTED_REQUEST: 421,
  
    /**
     * The request was well-formed but was unable to be followed due to semantic errors.
     */
    UNPROCESSABLE_ENTITY: 422,
  
    /**
     * The resource that is being accessed is locked.
     */
    LOCKED: 423,
  
    /**
     * The request failed due to failure to update a previous request.
     */
    FAILED_DEPENDENCY: 424,
  
    /**
     * Indicates that the server is unwilling to risk processing a request that might be re-processed.
     */
    TOO_EARLY: 425,
  
    /**
     * The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol.
     */
    UPGRADE_REQUIRED: 426,
  
    /**
     * The origin server requires the request to be conditional.
     */
    PRECONDITION_REQUIRED: 428,
  
    /**
     * The user has sent too many requests in a given amount of time ("rate limiting").
     */
    TOO_MANY_REQUESTS: 429,
  
    /**
     * The server is unwilling to process the request because its header fields are too large.
     */
    REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  
    /**
     * The user-agent requested a resource that cannot legally be provided, such as a web page censored by a government.
     */
    UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  
    /**
     * This error condition means that the client's request was not successful because the client did not send an appropriate byterange header for the requested resource.
     */
    INVALID_RANGE: 416,
  
    /**
     * The server cannot process the request due to an internal error. The user should try again later.
     */
    RETRY_WITH: 449,
  
    /**
     * The server cannot process the request due to a high load. The user should try again later.
     */
    BLOCKED_BY_WINDOWS_PARENTAL_CONTROLS: 450,
  
    /**
     * The request should be retried after performing the appropriate action.
     */
    REDIRECT: 451,
  
  
    /**
     * A general error message, given when an unexpected condition was encountered and no more specific message is suitable.
     */
    INTERNAL_SERVER_ERROR: 500,
  
    /**
     * The server either does not recognize the request method, or it lacks the ability to fulfill the request.
     */
    NOT_IMPLEMENTED: 501,
  
    /**
     * The server was acting as a gateway or proxy and received an invalid response from the upstream server.
     */
    BAD_GATEWAY: 502,
  
    /**
     * The server is currently unavailable (because it is overloaded or down for maintenance). Generally, this is a temporary state.
     */
    SERVICE_UNAVAILABLE: 503,
  
    /**
     * The server was acting as a gateway or proxy and did not receive a timely response from the upstream server.
     */
    GATEWAY_TIMEOUT: 504,
  
    /**
     * The HTTP version used in the request is not supported by the server.
     */
    HTTP_VERSION_NOT_SUPPORTED: 505,
  
    /**
     * The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.
     */
    VARIANT_ALSO_NEGOTIATES: 506,
  
    /**
     * The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.
     */
    INSUFFICIENT_STORAGE: 507,
  
    /**
     * The server detected an infinite loop while processing the request.
     */
    LOOP_DETECTED: 508,
  
    /**
     * Further extensions to the request are required for the server to fulfill it.
     */
    NOT_EXTENDED: 510,
  
    /**
     * The client needs to authenticate to gain network access.
     */
    NETWORK_AUTHENTICATION_REQUIRED: 511
  };
  