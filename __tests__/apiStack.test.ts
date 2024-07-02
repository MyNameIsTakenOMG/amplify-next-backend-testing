import { Template } from 'aws-cdk-lib/assertions';
import { apiStack } from '../amplify/backend';

describe('API Stack', () => {
  let template: Template;

  beforeAll(() => {
    template = Template.fromStack(apiStack);
  });

  it('should create a new API Gateway with proper configuration', () => {
    template.hasResourceProperties('AWS::ApiGateway::RestApi', {
      Name: 'myRestApi',
    });
  });

  it('should create a Cognito User Pool authorizer', () => {
    template.hasResourceProperties('AWS::ApiGateway::Authorizer', {
      Type: 'COGNITO_USER_POOLS',
    });
  });
});
