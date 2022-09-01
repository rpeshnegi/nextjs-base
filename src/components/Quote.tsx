import * as Yup from "yup";
import { AxiosResponse } from "axios";
import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useIsMountedRef from "../_hooks/useIsMountedRef";
import TextField from "./Form/fields/TextField";
import FormProvider from "./Form/FormProvider";
import { strings } from "../localization/data";
import { yupResolver } from "@hookform/resolvers/yup";
import { Message } from "yup/lib/types";
import { apiGetProductUnitTypes } from "../modules/Product/product-service";
import SelectFormField from "./Form/fields/SelectFormField";
import { useRouter } from "next/router";
import { CONSTANTS } from "../helpers/constants";
import { UnitType } from "../modules/Product/types";

export default function Quote() {
  const router = useRouter()
  const isMountedRef = useIsMountedRef();
  const [unitTypes, setUnitTypes] = useState<UnitType[]>([])

  const callGetCountries = useCallback(async () => {
    try {
      const res: AxiosResponse = await apiGetProductUnitTypes()
      setUnitTypes(res.data?.data || [])
    } catch (e) { console.log(e) }
  }, [setUnitTypes])

  useEffect(() => {
    if (isMountedRef.current)
      callGetCountries()

    return (() => { })
  }, [callGetCountries, isMountedRef])

  let defaultValues = {
    quantity: '',
    message: '',
    unit: ''
  }

  const methods: any = useForm({
    resolver: yupResolver(Yup.object().shape({
      quantity: Yup.string().required(
        strings.formatString(
          strings.validation.required,
          'Quantity is required'
        ) as Message
      ),
      message: Yup.string().required(
        strings.formatString(
          strings.validation.required,
          'Message is required'
        ) as Message
      ),
      unit: Yup.string().required(
        strings.formatString(
          strings.validation.required,
          'Pieces is required'
        ) as Message
      ),
    })),
    defaultValues,
  });

  const { setError, handleSubmit, setValue, watch, formState: { isSubmitting } } = methods;
  const formValues = watch()


  const onSubmit = async (values: any) => {
    localStorage.setItem(CONSTANTS.RFQ_FORM_DATA, JSON.stringify(values))
    router.push('/rfq/request')
  };

  return (
    <>
      <div className='damarket'>
        {/* Request-Quotation-START */}
        <section className='container-fluid request-quotation'>
          <div className='container'>
            <div className='row position-relative'>
              <div className='col-sm-12'>
                <div className='req-content'>
                  <div className='req-content-inn'>
                    <h2>Confused about prices? Let us help you...!</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                  </div>
                </div>
              </div>
              <div className='col-sm-6'>
                <div className='req-form'>
                  <h2>One Request, Multiple Quotes</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                  <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-3">
                      <TextField type="text" className='form-control' placeholder='What are you looking for' name="message" />
                    </div>
                    <div className="mb-3">
                      <TextField type="number" className='form-control' placeholder="Quantity" name="quantity" />
                    </div>
                    <div className="mb-3">
                      <SelectFormField
                        name="unit"
                        showEmpty
                        className='form-select'
                        value={formValues.pieces}
                        options={unitTypes.map((row: UnitType) => ({ lable: row.unit_value, value: row.id }))}
                      />
                    </div>
                    <button type="submit" className="btn w-100">Request for Quotation</button>
                  </FormProvider>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Request-Quotation-END */}
      </div>
    </>
  )
}
