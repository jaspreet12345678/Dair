import React from "react";
import "./Contact.css";
import {
  Flex,
  Box,
  Heading,
  Select,
  Image,
  Textarea,
  Text,
  Input,
  HStack,
  Button,
  FormControl,
  FormLabel,
  Stack,
  Container,
  Center,
} from "@chakra-ui/react";
import { Formik, Field } from "formik";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <div class="w-100" style={{marginBottom:"-15px"}}>
        <section class="advance-digital">
          <div class="container">
            <h3 style={{ textAlign: "start" }}>
              <strong> CONTACT US</strong>
            </h3>
            <br />
            <hr />
            <br />
            <HStack style={{width:"inherit"}}>
              <div style={{ display: "flex",width:"inherit" }}>
                <div class="col-md-6 mt-5">
                  <p>
                    Drop us an E-mail, we would like to get your feedback or if
                    you :
                  </p>
                  <div class="contact mt-3">
                    <ul>
                      <li>Have a project that is aligned with our GRM</li>
                      <li>Want to get involved in our Hubs</li>
                      <li>
                        Want to get more information on how you can support us.
                      </li>
                    </ul>
                  </div>
                </div>
                <Container
                  style={{
                    "box-shadow": "0 0 6px 0 grey",
                    "border-radius": "10px",
                    float:"right",
                    width:"500px"
                  }}
                  mt={6}
                  mb={6}
                  maxW="6xl"
                >
                
                  <Stack flex={1}>
                    <Flex style={{width:"inherit"}}>
                      <Box bg="white" p={6}>
                        <Formik
                          initialValues={{
                            name: "",
                            email: "",
                            subject: "",
                            messages: "",
                          }}
                          validate={(values) => {
                            const errors = {};

                            if (values.name.trim() === "") {
                              errors.name = "** Name Feild is Required";
                            } else if (isNaN(values.name) === false) {
                              errors.name = "** Name Contain only characters";
                            }

                            if (!values.email) {
                              errors.email = "** Email Feild Required";
                            } else if (
                              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                values.email
                              )
                            ) {
                              errors.email = "** Invalid email address";
                            }

                            if (values.subject.trim() === "") {
                              errors.subject = "** subject Feild is Required";
                            } else if (isNaN(values.subject) === false) {
                              errors.subject =
                                "**subject Contain only characters";
                            }
                            return errors;
                          }}
                          onSubmit={(values, { setSubmitting }, event) => {
                            console.log("values", values);
                          }}
                        >
                          {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleSubmit,
                            handleBlur,
                            isSubmitting,
                          }) => (
                            <form onSubmit={handleSubmit}>
                              <FormControl style={{width:"400px"}}>
                                <FormLabel htmlFor="Name">Name</FormLabel>
                                <Input
                                  type="text"
                                  name="name"
                                  id="name"
                                  placeholder="Enter your name "
                                  size="lg"
                                  variant="filled"
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={values.name}
                                />
                                <Text color={"red"} fontSize={"sm"}>
                                  {errors.name && touched.name && errors.name}
                                </Text>
                              </FormControl>
                              <FormControl>
                                <FormLabel htmlFor="email">
                                  Email Address
                                </FormLabel>
                                <Input
                                  type="email"
                                  name="email"
                                  id="email"
                                  placeholder="Enter your email"
                                  size="lg"
                                  variant="filled"
                                  value={values.email}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                />
                                <Text color={"red"} fontSize={"sm"}>
                                  {errors.email &&
                                    touched.email &&
                                    errors.email}
                                </Text>
                              </FormControl>
                              <FormControl>
                                <FormLabel htmlFor="subject">Subject</FormLabel>
                                <Field
                                  as={Input}
                                  id="subject"
                                  name="subject"
                                  type="text"
                                  variant="filled"
                                  size="lg"
                                  placeholder="Enter your subject"
                                  value={values.subject}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                />
                                <Text color={"red"} fontSize={"sm"}>
                                  {errors.subject &&
                                    touched.subject &&
                                    errors.subject}
                                </Text>
                              </FormControl>
                              <FormControl>
                                <FormLabel
                                  htmlFor="message"
                                  value={values.messages}
                                >
                                  Message(optional)
                                </FormLabel>
                                <Textarea
                                  borderColor="gray.300"
                                  _hover={{
                                    borderRadius: "gray.300",
                                  }}
                                  // value={values.messages}
                                  placeholder="message"
                                />
                              </FormControl>
                              <Center>
                                <HStack pt={12}>
                                  <Button type="submit" disabled={isSubmitting}>
                                    Submit
                                  </Button>
                                </HStack>
                              </Center>
                            </form>
                          )}
                        </Formik>
                      </Box>
                    </Flex>
                  </Stack>
                </Container>
              </div>
            </HStack>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
