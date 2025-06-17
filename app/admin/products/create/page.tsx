import { Button } from "@/components/ui/button";
import React from "react";
import { faker } from "@faker-js/faker";
import FormInput from "@/components/form/FormInput";
import PriceInput from "@/components/form/PriceInput";
import { createProductAction } from "@/utils/actions";
import FormContainer from "@/components/form/FormContainer";
import ImageInput from "@/components/form/ImageInput";
import TextAreaInput from "@/components/form/TextAreaInput";
import CheckboxInput from "@/components/form/CheckBoxInput";
import { SubmitButton } from "@/components/form/Buttons";

const CreateProductsPage = () => {
  const name = faker.commerce.productName();
  const company = faker.company.name();
  const description = faker.lorem.paragraph({ min: 10, max: 12 });
  return (
    <section className="">
      <h1 className="text-2xl font-semibold capitalize">Create Products</h1>
      <div className="border p-8 rounded-md">
        <FormContainer action={createProductAction}>
          <div className="grid gap-4 md:grid-cols-2 my-2">
            <FormInput
              type="text"
              name="name"
              label="Products name"
              defaultValue={name}
            />
            <FormInput
              type="text"
              name="company"
              label="company"
              defaultValue={company}
            />
            <PriceInput />
            <ImageInput />
          </div>
          <TextAreaInput
            name="description"
            labelText="products description"
            defaultValue={description}
          />
          <div className="mt-6">
            <CheckboxInput name={"featured"} label={"featured"} />
          </div>
          <SubmitButton text="create products" className="mt-8" />
        </FormContainer>
      </div>
    </section>
  );
};

export default CreateProductsPage;
