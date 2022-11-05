const sendResponse = (h, status, message = null, data = null, code = 201) => {
  const result = {
    status: status,
  };

  if (message != null) {
    result["message"] = message;
  }

  if (data !== null) {
    result["data"] = data;
  }
  const response = h.response(result);
  response.code(code);

  return response;
};

module.exports = sendResponse;
