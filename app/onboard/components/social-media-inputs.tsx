import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";


interface SocialMediaInputsProps {
    formData:any ;
    handleChange:(name:string , value:any)=>void;
    errors:any;
}
const socialMediaInputs:React.FC<SocialMediaInputsProps>=({
    formData,
    handleChange , errors
})=>(
    <>
    <FormItem className="items-center justify-center w-full">
        <FormLabel className="text-sm">
            {errors?.x && 
            <p className="text-red-500 text-xs mt-1">
                {
                    errors?.x
                }
                
                </p>}
                X (Formerly Twitter)
                    
        </FormLabel>
        <FormControl>
            <Input
            placeholder="https://x.com/HarshSr11377363"
            onChange={(e)=> handleChange("x",e.target.value)}
            value={formData.x}
            />
        </FormControl>

    </FormItem>
    <FormItem className="items-center justify-center w-full">
        <FormLabel className="text-sm">
            {errors?.instaram && <p className="text-red-500 text-xs  mt-1">
                {
                    errors?.instagram
                }
                
                </p>}
               Instagram

        </FormLabel>
        <FormControl>
            <Input
            placeholder="https://x.com/HarshSr11377363"
            onChange={(e)=> handleChange("instagram",e.target.value)}
            value={formData.instagram}
            />
        </FormControl>

    </FormItem>
    <FormItem className="items-center justify-center w-full">
  <FormLabel className="text-sm">
    {errors?.linkedin && (
      <p className="text-red-500 text-xs mt-1">{errors?.linkedin}</p>
    )}
    LinkedIn
  </FormLabel>
  <FormControl>
    <Input
      placeholder="https://linkedin.com/in/yourprofile"
      onChange={(e) => handleChange("linkedin", e.target.value)}
      value={formData.linkedin}
    />
  </FormControl>
</FormItem>

<FormItem className="items-center justify-center w-full">
  <FormLabel className="text-sm">
    {errors?.github && (
      <p className="text-red-500 text-xs mt-1">{errors?.github}</p>
    )}
    GitHub
  </FormLabel>
  <FormControl>
    <Input
      placeholder="https://github.com/yourusername"
      onChange={(e) => handleChange("github", e.target.value)}
      value={formData.github}
    />
  </FormControl>
</FormItem>

<FormItem className="items-center justify-center w-full">
  <FormLabel className="text-sm">
    {errors?.discord && (
      <p className="text-red-500 text-xs mt-1">{errors?.discord}</p>
    )}
    Discord
  </FormLabel>
  <FormControl>
    <Input
      placeholder="https://discord.com/users/youruserid"
      onChange={(e) => handleChange("discord", e.target.value)}
      value={formData.discord}
    />
  </FormControl>
</FormItem>
   
    </>

);
export default socialMediaInputs;