import { client } from "../client";
import { AuthenticationEndpoints } from "./authentication.endpoint";
import { PostUserSignInBody, PostUserSignUpBody } from "./models";
import { PostUserSignInResponse } from "./models/responses/post-user-signin.response";

export const authenticationService = {
    signIn (body: PostUserSignInBody) {
        return client.post<PostUserSignInResponse>(AuthenticationEndpoints.signIn, body);
    },
    signUp (body: PostUserSignUpBody) {
        return client.post(AuthenticationEndpoints.signUp, body);
    }
}