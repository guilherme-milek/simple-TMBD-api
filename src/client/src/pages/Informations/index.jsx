import { Container, SectionContainer } from "./styles.js";

import informations from "../../database/informations";
import { useParams } from "react-router-dom";
import ValidValues from "../../components/ValidValues";

export default function Informations({ standard }) {
  const { filter } = useParams();

  const { pageTitle, sections } = informations[filter ? filter : standard];

  return (
    <Container>
      <h2>{pageTitle}</h2>
      {sections.map(({ title, content }, index) => (
        <SectionContainer key={index}>
          {!!title && <h3>{title}</h3>}
          {content.map(
            ({ type, text, link, list, description, validValues }, index) => {
              switch (type) {
                case "default":
                  return <p key={index}>{text}</p>;

                case "simpleExample":
                  return (
                    <div className="code" key={index}>
                      <code>{text}</code>
                    </div>
                  );

                case "complexExample":
                  return (
                    <div key={index}>
                      <div className="code">
                        <code>{text}</code>
                      </div>
                      <p>{description}</p>
                    </div>
                  );

                case "complexLink":
                  return (
                    <div key={index}>
                      <p>
                        <a href={link} target="_blank" rel="noreferrer">
                          {text}
                        </a>
                      </p>

                      <p className="description">{description}</p>
                    </div>
                  );

                case "list":
                  return (
                    <ul key={index} className="list">
                      {list.map(({ type, key, value }, index) => {
                        switch (type) {
                          case "keyValue":
                            return (
                              <li key={index}>
                                <p>
                                  <strong>{key}</strong> {value}
                                </p>
                              </li>
                            );
                          default:
                            return "";
                        }
                      })}
                    </ul>
                  );

                case "validValues":
                  return <ValidValues validValues={validValues} key={index} />;

                default:
                  return "";
              }
            }
          )}
        </SectionContainer>
      ))}
    </Container>
  );
}
