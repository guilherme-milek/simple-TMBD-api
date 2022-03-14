import { useForm } from "react-hook-form";
import ReactJson from "react-json-view";

import { baseURL } from "../../services/api";
import { api } from "../../services/api";

import useInputs from "../../providers/inputs";
import useResponse from "../../providers/response";
import usePageSwitchDetector from "../../providers/pageSwitchDetector";

import { Container, Table, TableContainer, SectionContainer } from "./styles";
import { useEffect } from "react";

export default function Definition({
  endpoint,
  filter,
  queryParameters,
  pathParameters,
}) {
  const { inputs, addInput } = useInputs();
  const { response, addResponse } = useResponse();
  const { pageChanged } = usePageSwitchDetector();

  const { handleSubmit, register } = useForm();

  useEffect(() => {
    document.querySelector(".form").reset();
  }, [pageChanged]);

  const linkCreator = (data, type = "query") => {
    switch (type) {
      case "query":
        return Object.keys(data).reduce((acc, parameter) => {
          if (data[parameter]) {
            return acc + `?${parameter}=${data[parameter]}`;
          }
          return acc;
        }, "");

      case "path":
        return Object.keys(data).reduce((acc, parameter) => {
          if (data[parameter]) {
            return acc + `/${data[parameter]}`;
          }
          return acc;
        }, "");

      default:
        break;
    }
  };

  const onSubmit = async (data, type = "query") => {
    let link = linkCreator(data, type);

    try {
      const apiResponse = await api.get(
        `/${endpoint}${!!filter ? `/${filter}` : ""}${link && link}`
      );
      addResponse(apiResponse.data);
    } catch (error) {
      addResponse(error.response.data);
    }
  };

  const handleChange = (event) => {
    const inputName = event.currentTarget.name;
    const inputValue = event.currentTarget.value;

    addInput(inputName, inputValue);
  };

  return (
    <Container>
      {!!queryParameters.length && (
        <SectionContainer>
          <h3>Parâmetros da URL &#40;Query&#41;</h3>
          <form
            onSubmit={handleSubmit((event) => onSubmit(event, "query"))}
            className="form"
          >
            <TableContainer>
              <Table>
                {queryParameters.map(({ param, type, require }, index) => (
                  <div key={index} className="table-row">
                    <div className="table-data main">
                      <p>{param}</p>
                    </div>
                    <div className="table-data">
                      <input
                        {...register(param)}
                        type="text"
                        placeholder={type}
                        onChange={handleChange}
                      />

                      <span>
                        {require === "Obrigatório" ? (
                          <strong>{require}</strong>
                        ) : (
                          require
                        )}
                      </span>
                    </div>
                  </div>
                ))}
              </Table>
            </TableContainer>
            <div className="info">
              <button type="submit">Enviar requisição</button>
              <p>{`${baseURL}/${endpoint}${
                !!filter ? `/${filter}` : ""
              }${linkCreator(inputs)}`}</p>
            </div>
          </form>
        </SectionContainer>
      )}

      {!!pathParameters.length && (
        <SectionContainer>
          <h3>Parâmetros da URL &#40;Query&#41;</h3>
          <form
            onSubmit={handleSubmit((event) => onSubmit(event, "path"))}
            className="form"
          >
            <TableContainer>
              <Table>
                {pathParameters.map(({ param, type, require }, index) => (
                  <div key={index} className="table-row">
                    <div className="table-data main">
                      <p>{param}</p>
                    </div>
                    <div className="table-data">
                      <input
                        {...register(param)}
                        type="text"
                        placeholder={type}
                        onChange={handleChange}
                      />

                      <span>
                        {require === "Obrigatório" ? (
                          <strong>{require}</strong>
                        ) : (
                          require
                        )}
                      </span>
                    </div>
                  </div>
                ))}
              </Table>
            </TableContainer>
            <div className="info">
              <button type="submit">Enviar requisição</button>
              <p>{`${baseURL}/${endpoint}${
                !!filter ? `/${filter}` : ""
              }${linkCreator(inputs, "path")}`}</p>
            </div>
          </form>
        </SectionContainer>
      )}

      <SectionContainer className="response-section">
        <h3>Resposta</h3>
        <div className="response">
          <ReactJson src={response} />
        </div>
      </SectionContainer>
    </Container>
  );
}
