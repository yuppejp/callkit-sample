import { SNSClient, PublishCommand } from "@aws-sdk/client-sns";
const client = new SNSClient();
const snsArn = 'arn:aws:sns:ap-northeast-1:XXXXXXXXXXX:endpoint/APNS_VOIP_SANDBOX/AppleVoIPSNS/XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX';

export const handler = async(event) => {
    console.log('[enter] handler');
    console.log(`event: ${JSON.stringify(event)}`);

    try {
        const message = event.message;
        const result = await publish(snsArn, message);
        const httpResponse = {
            statusCode: 200,
            body: JSON.stringify(result),
        };
        console.log(httpResponse);
        return httpResponse;
    } catch (error) {
        const response = {
            statusCode: 400,
            body: JSON.stringify(error),
        };
        console.log(response);
        return response;
    }
};

async function publish(arn, message) {
    const messageAttributes = {
        'AWS.SNS.MOBILE.APNS.PUSH_TYPE': {
            'DataType': 'String',
            'StringValue': 'voip'
        }
    };
    const input = {
        'TargetArn': arn,
        'Message': message,
        'Subject': 'subject1',
        'MessageAttributes': messageAttributes
    };
    const command = new PublishCommand(input);
    const response = await client.send(command);
    return response;
}
