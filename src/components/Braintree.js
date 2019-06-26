import React, { useEffect, useState } from "react";
import client from "braintree-web/client";
import hostedFields from "braintree-web/hosted-fields";
import "../App.css";

const Braintree = () => {
    const [hostedFieldsInstance, setHostedFieldsInstance] = useState(null);

    const submitBraintreeRequest = async () => {
        const tokenizeResponse = await hostedFieldsInstance.tokenize();
        console.log({ tokenizeResponse });
    };

    const initializeBraintreeClient = async () => {
        const createdClient = await client.create({
            authorization: "sandbox_bnj9mtnj_53t25659tr58ryyh"
        });

        const hostedFieldsOptions = {
            client: createdClient,
            fields: {
                number: {
                    selector: "#card-number",
                    placeholder: "4111 1111 1111 1111"
                }
            }
        };

        const createdHostedFields = await hostedFields.create(
            hostedFieldsOptions
        );

        setHostedFieldsInstance(createdHostedFields);
    };

    useEffect(() => {
        initializeBraintreeClient();
    }, []);

    return (
        <div>
            <div className="hosted-fields" id="card-number" />
            <button onClick={submitBraintreeRequest}>Submit</button>
        </div>
    );
};

export default Braintree;
